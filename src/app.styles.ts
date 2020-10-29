import styled from 'styled-components';

export const container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  font-family: 'IBM Plex Serif', serif;
`;

export const header = styled.div`
  font-size: xx-large;
  font-weight: 700;
  color: #0a235c;
  margin-bottom: 32px;
`;

export const user = styled.div`
  margin: 0 5px;
  font-weight: 700;
`;
export const date = styled.div`
  margin: 0 5px;
`;
export const form = styled.form`
  padding-top: 20px;
  padding-bottom: 40px;
`;

export const issuer_title = styled.div`
  font-size: 24px;
  margin-bottom: 10px;
  color: #008080;
  text-transform: capitalise;
  font-weight: 700;
`;

export const issuer_header = styled.div`
  font-size: 16px;
  font-weight: 400;
  display: flex;
  align-items: center;
  margin-bottom: 6px;
  color: #60739f;
`;
export const issue_body = styled.div`
  word-wrap: break-word;
  white-space: pre-line;
  overflow-x: auto;
`;
export const comment_title = styled.div`
  font-size: 24px;
  margin-bottom: 10px;
  color: #008080;
  font-weight: 700;
  margin-left: 24px;
`;

export const comment_header = styled.div`
  font-size: 16px;
  font-weight: 700;
  display: flex;
  align-items: center;
  margin-bottom: 6px;
`;
export const comment_text = styled.div`
  font-size: 16px;
  font-weight: 400;
  overflow-x: auto;
`;

export const comment_body = styled.div`
  margin-bottom: 32px;
  border-radius: 8px;
  background: #f4f5f7;
  padding: 22px 24px;
  color: rgb(10, 35, 92);
`;

export const form_input = styled.input`
  height: 24px;
  padding: 9px 24px;
  color: #0a235c;
  border: 1px solid rgba(10, 35, 92, 0.35);
  border-radius: 8px;
  font-size: 16px;
  &:focus {
    border: 1px solid rgba(35, 181, 181, 0.35);
  }
`;

export const form_button = styled.button`
  padding: 12px 39px;
  font-size: 16px;
  background: rgb(35, 181, 181);
  border: none;
  border-radius: 8px;
  color: #fff;
  margin: 0 25px;
  box-shadow: 0px 8px 16px -8px rgb(35, 181, 181);
`;
export const collapse_content_container = styled.div`
  overflow-y: hidden;
  transition: height ease 0.3s;
`;
export const collapse_button_container = styled.div`
  position: relative;
  box-shadow: 0 -32px 32px -32px rgba(10, 35, 92, 0.35);
  padding: 80px 0px;
  background: #fff;
  display: flex;
  justify-content: center;
`;
export const collapse_button_text = styled.div`
  position: relative;
  border-radius: 12px;
  background: #fff;
  padding: 4px 27px;
  color: rgb(35, 181, 181);
  top: -95px;
  cursor: pointer;
`;
