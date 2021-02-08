import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

export default () => {
  const { state } = useStateMachine(updateAction);
  const { handleSubmit, register } = useForm({
    defaultValues: state.yourDetails,
  });
  const { actions } = useStateMachine({ updateAction });
  const { push } = useHistory();

  //Save Data
  const onSubmit = (data) => {
    actions.updateAction(data);
    push("/step2");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Step 1</h2>
      <label>
        First Name:
        <input name="firstName" ref={register} />
      </label>
      <button type="submit">Next</button>
    </form>
  );
};
