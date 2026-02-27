gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero h1", {
  y: -50,
  opacity: 0,
  duration: 1
});

gsap.from(".hero p", {
  y: 30,
  opacity: 0,
  duration: 1,
  delay: 0.5
});

gsap.from(".card", {
  scrollTrigger: ".card",
  opacity: 0,
  y: 50,
  stagger: 0.2
});

gsap.from(".project", {
  scrollTrigger: ".project",
  opacity: 0,
  x: -50,
  stagger: 0.3
});
