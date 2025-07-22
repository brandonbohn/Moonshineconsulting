import React from 'react';

function Voicesincareblogentry() {
  return (
    <div
      className="container"
      style={{ fontFamily: "sans-serif", minHeight: "100vh" }}
    >
      <style>
        {`
          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 15px;
          }
          .Titles {
            text-align: center;
            padding: 20px;
            background: #ffffff;
            margin-top: 50px;
            border-radius: 8px;
          }
          .content p {
            font-size: 18px;
            line-height: 1.6;
          }
          @media (max-width: 768px) {
            .Titles {
              font-size: 20px;
              padding: 15px;
            }
            .content p {
              font-size: 16px;
            }
          }
        `}
      </style>
      <div>
        <div>
          <div></div>
        </div>
      </div>
      <div className="Titles">

       <h1>
        The Heart of Hospice Nursing: Compassion, Comfort, and Connection
      </h1>
      <h2>Author:Christie Stephan RN ODG</h2> 
      </div>
      
      <div className="content mb-4 box" style={{ padding: "20px", fontSize: "20px", height: "100%", width: "100%" }}>
        <p>
          There are so many things I could say about nursing, but one of the
          most rewarding—and humbling—experiences has been working in hospice
          home care.
          <br />
          <br />
          Too often, patients come to hospice care much later than they should in
          their disease journey. It’s heartbreaking to see a patient struggle, yet
          it is an honor to walk alongside them during this precious, final
          chapter. When I first assess a patient for hospice, I take time to explain
          the hospice philosophy — a focus on comfort, dignity, and quality of life —
          and become their advocate, supporting their decisions and those of their
          families.
          <br />
          <br />
          There is an instant intimacy that forms between patient and nurse. I
          remember one patient who, while I was helping ease her severe nausea,
          looked over and said, “You are here with me, and I feel like we’re close
          friends, yet we just met.” Moments like that reveal the profound
          connection and trust built in a short time.
          <br />
          <br />
          As a hospice nurse, I am often the one family members see on weekends when
          their loved one isn’t feeling well. I pray with families, help them cope
          with the impending loss of their precious mother, daughter, or
          grandparent. I give hugs, hold hands, and listen as they share their
          happiest memories. I make sure to remind them about Jesus and the comfort
          of faith. And yes, I cry when no one is around and miss my patients when
          they pass.
          <br />
          <br />
          I’ve witnessed the good, the bad, and the ugly sides of life and death. But
          I am grateful for an incredible team and a Medical Director who is available
          24/7. Above all, I know I have done right by my patients when they are
          comfortable, pain-free, and surrounded by love.
          <br />
          <br />
          Hospice nursing is a calling that teaches me about compassion, courage, and
          the true meaning of care.
        </p>
      </div>
    </div>
  );
}
export default Voicesincareblogentry;