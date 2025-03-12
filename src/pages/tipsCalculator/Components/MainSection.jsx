import React from 'react';
import logo from '../images/logo.svg';
import BillInput from './BillInput';
import TipInput from './TipInput';
import PeopleInput from './PeopleInput';
import ResultContainer from './ResultContainer';
import { useState, useEffect } from 'react';
import '../Styling/mainSection.css';

const MainSection = ({}) => {
  const [bill, setBill] = useState(null);
  const [tip, setTip] = useState(null);
  const [peopleCount, setPeopleCount] = useState(null);
  const [tipAmount, setTipAmount] = useState(null);
  const [totalAmount, setTotalAmount] = useState(null);

  useEffect(() => {
    if (bill > 0 && tip > 0 && peopleCount > 0) {
      setTipAmount(parseFloat((bill * tip) / 100 / peopleCount).toFixed(2));
      setTotalAmount(
        parseFloat((tipAmount * peopleCount + bill) / peopleCount).toFixed(2)
      );
    }
  }, [bill, tip, peopleCount, tipAmount, totalAmount]);

  return (
    <section className="calculator-main-section">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="calculator-body">
        <div className="user-input">
          <BillInput setBill={setBill} />
          <TipInput setTip={setTip} />
          <PeopleInput
            peopleCount={peopleCount}
            setPeopleCount={setPeopleCount}
          />
        </div>
        <ResultContainer
          tip={tip}
          setTip={setTip}
          bill={bill}
          setBill={setBill}
          peopleCount={peopleCount}
          setPeopleCount={setPeopleCount}
          tipAmount={tipAmount}
          setTipAmount={setTipAmount}
          totalAmount={totalAmount}
          setTotalAmount={setTotalAmount}
        />
      </div>
    </section>
  );
};

export default MainSection;
