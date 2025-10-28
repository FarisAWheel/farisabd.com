function About() {
  return (
    <div>
      <h1 className="mt-5 mb-10 text-4xl md:text-5xl lg:text-6xl">about me</h1>
      <div className="flex justify-center gap-20">
        <p className="text-center">IMAGE GO HERE</p>
        <div>
          <p>
            my name is{" "}
            <span className="text-[rgb(27,153,139)]">faris abdelrahem</span> i'm a computer science student at the <a href="https://www.ucf.edu/">university of central florida</a>.  
            i grew up solving problems, it's a process and feeling i've loved and chased for as long as i can remember. supplement that
            with a curiosity for new technology, it was only a matter of time before i'd try my hand at software engineering
          </p>
          <p>
            i'm also an addict to bringing people together, i can't help myself from joining communities to meet people and host different things. that's why you can find me places like
            {" "}<a href="https://club.knighthacks.org">Knight Hacks</a>, <a>Color Stack</a>, <a>SHPE</a>, and <a>NSBE</a>!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
