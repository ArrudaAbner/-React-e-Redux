/* eslint-disable import/no-anonymous-default-export */
import DiretaFilho from "./DiretaFilho";

export default (props) => {
  return (
    <div>
      <DiretaFilho nome="Junior" idade={20} nerd={false}></DiretaFilho>
      <DiretaFilho nome="Gabriel" idade={17} nerd={true}></DiretaFilho>
    </div>
  );
};
