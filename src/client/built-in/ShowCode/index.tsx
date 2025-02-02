import React, { useEffect, useMemo, useRef, useState } from "react";
import { ShowCodeProps } from "./types";
import hljs from "highlight.js";
import {
  RenderWindow,
  ShowCodeContainer,
  ButtonContainer,
  CodeWindow,
} from "./styled";
import { IFrame } from "../../components/IFrame";
import { Loading } from "../../components/Loading";
import sandboxes from "virtual:sandboxes";

const ShowCode: React.FC<ShowCodeProps> = (props) => {
  const { code, lang, mobileView, moduleId } = props;

  const ComponentRef = useRef<React.FC>(() => <></>);
  const [isLoading, setIsLoading] = useState(false);
  const [isShowing, setIsShowing] = useState(false);
  const [_, update] = useState({});

  useEffect(() => {
    if (sandboxes[moduleId] && !mobileView) {
      setIsLoading(true);
      sandboxes[moduleId]()
        .then((res) => {
          const { default: Component } = res;
          ComponentRef.current = Component;
          update({});
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, []);

  const display = useMemo(() => {
    return hljs.highlight(code.replace(/\n\n/g, "\n"), {
      language: lang || "bash",
    });
  }, [code]);

  const renderCode = () => {
    return (
      <pre>
        <code
          style={{ margin: 0 }}
          className="docit-code"
          dangerouslySetInnerHTML={{ __html: display.value }}
        ></code>
      </pre>
    );
  };

  return (
    <Loading loading={isLoading}>
      <ShowCodeContainer mobileView={mobileView}>
        <RenderWindow>
          {mobileView ? (
            <iframe
              src={`#sandbox?moduleId=${moduleId}`}
              style={{ border: 0, width: "100%", height: "100%" }}
            ></iframe>
          ) : (
            <IFrame>
              <ComponentRef.current />
            </IFrame>
          )}
        </RenderWindow>
        <ButtonContainer>
          <button
            onClick={() => {
              setIsShowing((v) => !v);
            }}
          >
            Show Code
          </button>
        </ButtonContainer>
        <CodeWindow show={isShowing}>{renderCode()}</CodeWindow>
      </ShowCodeContainer>
    </Loading>
  );
};

export { ShowCode };
