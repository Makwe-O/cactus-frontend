import React, { useState } from 'react';
import * as s from '../app.styles';
import axios from 'axios';
import { url, mapResult } from '../api/github-events.api';
import { GithubIssue } from '../api/github-events.model';
import Button from './button';
import Input from './input';
import { useMutation, queryCache } from 'react-query';

type FormProps = {};

const Form: React.FC<FormProps> = () => {
  const [user, setUser] = useState('');
  const [repo, setRepo] = useState('');
  const [mutateReq] = useMutation(
    () =>
      axios
        .get(`/networks/${user}/${repo}/events?per_page=100`)
        .then((res) => mapResult(res.data)),
    {
      onSuccess: (data: GithubIssue[]) => {
        queryCache.setQueryData(url, data);
      },
    }
  );
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await mutateReq();
  };
  return (
    <s.form onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}>
      <Input
        placeholder='user'
        name='user'
        value={user}
        handleChange={(e: React.FormEvent<HTMLInputElement>) =>
          setUser(e.currentTarget.value)
        }
      />
      <span style={{ margin: '0px 15px' }}>/</span>
      <Input
        placeholder='repo'
        name='repo'
        value={repo}
        handleChange={(e: React.FormEvent<HTMLInputElement>) =>
          setRepo(e.currentTarget.value)
        }
      />
      <Button text='Go fetch' />
    </s.form>
  );
};

export default Form;
