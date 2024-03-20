import React from 'react';
import Reason from './Reason';

function Reasons() {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      <Reason
        src="../assets/icons/icon-chat.png"
        alt="Chat Icon"
        title="You are our #1 priority"
        subtitle="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
      />
      <Reason
        src="../assets/icons/icon-money.png"
        alt="Money Icon"
        title="More savings means higher rates"
        subtitle="The more you save with us, the higher your interest rate will be!"
      />
      <Reason
        src="../assets/icons/icon-security.png"
        alt="Security Icon"
        title="Security you can trust"
        subtitle="We use top of the line encryption to make sure your data and money is always safe."
      />
    </section>
  );
}

export default Reasons;
