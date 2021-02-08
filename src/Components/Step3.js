import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

export default () => {
  const { state, actions } = useStateMachine({ updateAction });
  const { handleSubmit, register } = useForm({
    defaultValues: state.yourDetails,
  });
  const { push } = useHistory();

  //Save Data
  const onSubmit = (data) => {
    actions.updateAction(data);
    push("/result");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Step 3</h2>
      <select name="typeUser" ref={register}>
        <option value={1}>FullStack Developer</option>
        <option value={2}>Frontend Developer</option>
        <option value={3}>Backend Developer</option>
      </select>
      <button type="submit">See Result</button>
    </form>
  );
};
