import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1>KOSA: Censorship is &quot;Helping&quot;</h1>
      </header>

      <h4>Table of Contents</h4>
      <ol>
        <a href="#what-is-kosa">
          <li>What Is KOSA?</li>
        </a>
        <a href="#why-is-this-bad">
          <li>Why Is This Bad?</li>
        </a>
        <a href="#what-can-i-do">
          <li>What Can I Do?</li>
        </a>

        <a href="#bibliography">
          <li>Bibliography</li>
        </a>
      </ol>
      <div style={{ height: "25px" }}></div>
      <h2 id="what-is-kosa">What Is KOSA?</h2>
      <p>
        KOSA (or the Kids Online Safety Act) is a bill proposed by the United
        States Congress in Febuary 2022 and later reintroduced in May 2023. Its
        purpose is to protect children from the dangers of the internet by
        requiring social media sites to change their design or opt out of
        algorithm based recomendation systems.
        <br />
        <br />
        This bill is also the descendant of COPPA (Children&apos;s Online
        Privacy and Protection Act) and Children and Teens' Online Privacy
        Protection Act (also known as COPPA 2.0).
      </p>
      <h2 id="why-is-this-bad">Wait, Why Is This Bad?</h2>
      <p>
        KOSA is a big step in the wrong direction for internet safety. It would
        allow any state attorney general (who control what is censored) to block
        any content on the internet that they deem to be inappropriate, even
        when it is not. As the wikipedia page for KOSA states:
        <blockquote>
          The inclusion of the phrase "consistent with evidence-informed medical
          information" could be used by attorneys general to cherry-pick
          anti-trans sources as justification since there is no definition of
          what "evidence-based medical information" can include. Senator
          Blackburn, co-author of the bill, has argued that some education about
          racism and the civil rights movement overlaps with critical race
          theory, which she labels a "dangerous ideology" that can inflict
          "mental and emotional damage" upon children. She has also explicitly
          stated that the bill will be used to censor content involving the
          transgender community. EFF columnist Jason Kelly states that in the
          framework provided by the bill, that KOSA could be used to censor
          education about racism in schools since it could be claimed that it
          impacts mental health.
        </blockquote>
        By passing this bill, we are allowing misinformation to spread through
        the biases of attorneys, and are harming the children and their ability
        to seek help and info about things like race, gender, and sexual
        orientation.
      </p>

      <h2 id="what-can-i-do">What Can I Do?</h2>
      <p>
        There are many ways you can help to stop this bill from being passed.
        Email, text, or call your representatives with demands to vote NO on the
        bill in Congress. Share this info with others anywhere you can get it.
        Tell your friends, family, and relatives about KOSA, and why it must be
        stopped. The Electronic Frontier Foundation has a{" "}
        <a href="https://act.eff.org/action/tell-congress-kosa-will-censor-the-internet-but-won-t-help-kids">
          great guide
        </a>{" "}
        to all of this (check the bibliography) and a template for a message.
      </p>

      <h2 id="bibliography">Bibliography</h2>
      <ul>
        <li>
          <a href="https://wikipedia.org/wiki/Kids_Online_Safety_Act">
            https://wikipedia.org/wiki/Kids_Online_Safety_Act
          </a>
        </li>
        <li>
          <a href="https://act.eff.org/action/tell-congress-kosa-will-censor-the-internet-but-won-t-help-kids">
            https://act.eff.org/action/tell-congress-kosa-will-censor-the-internet-but-won-t-help-kids
          </a>
        </li>
        <li>
          <a href="https://www.eff.org/deeplinks/2023/05/kids-online-safety-act-still-huge-danger-our-rights-online">https://www.eff.org/deeplinks/2023/05/kids-online-safety-act-still-huge-danger-our-rights-online</a>
        </li>
        <li>
          <a href="https://en.wikipedia.org/wiki/Children%27s_Online_Privacy_Protection_Act">https://en.wikipedia.org/wiki/Children%27s_Online_Privacy_Protection_Act</a>
        </li>
      </ul>
    </>
  );
}

export default App;
