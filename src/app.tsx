import React from 'react';
import * as s from './app.styles';
import { useGithubIssueComments } from './api/github-events.api';
import ErrorDetails from './components/error-details';
import ReactMarkdown from 'react-markdown';
import Form from './components/form';
import Collapse from './components/collapse';
function App() {
  const { data, isLoading, isError, error } = useGithubIssueComments();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (isError) {
    return <ErrorDetails error={error} />;
  }

  return (
    <>
      <s.container>
        <s.header>Recent comments on TypeScript issues:</s.header>
        <Form />

        {data?.map((issue) => (
          <div key={issue.id}>
            <Collapse
              openText='Collapse Issue'
              closeText={`${issue.comments.length} comment(s) . Expand Issue`}
            >
              <s.issuer_title>
                <ReactMarkdown skipHtml>{issue.title}</ReactMarkdown>
              </s.issuer_title>
              <s.issuer_header>
                By
                <s.user>
                  <ReactMarkdown>{issue.user.login}</ReactMarkdown>
                </s.user>
                |{' '}
                <s.user>
                  <ReactMarkdown>{issue.created_at}</ReactMarkdown>
                </s.user>
              </s.issuer_header>
              <s.issue_body>
                <ReactMarkdown allowDangerousHtml>{issue.body}</ReactMarkdown>
              </s.issue_body>
              <s.comment_title>{`${issue.comments.length} Commnet(s)`}</s.comment_title>
              {issue.comments.map((comment) => (
                <s.comment_body key={comment.id}>
                  <s.comment_header>
                    By
                    <s.user>
                      <ReactMarkdown>{comment.user.login}</ReactMarkdown>
                    </s.user>
                    |{' '}
                    <s.user>
                      <ReactMarkdown>{comment.created_at}</ReactMarkdown>
                    </s.user>
                  </s.comment_header>
                  <s.comment_text>
                    <ReactMarkdown>{comment.body}</ReactMarkdown>
                  </s.comment_text>
                </s.comment_body>
              ))}
            </Collapse>
          </div>
        ))}
      </s.container>
    </>
  );
}

export default App;
