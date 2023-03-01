$(() => {
  const $openBtn = $("#openModal");

  const $modal = $("#modal");
  const $closeBtn = $("#close");
  // open BIO
  const $bioBtn = $("#openBio");
  const $2modal = $("#2modal");
  const $firstdiv = $("#firstdiv");

  // open Skills
  const $3modal = $("#3modal");
  const $skillsBtn = $("#openSkills");

  const $firsth1 = $("<h1>")
    .text("Welcome To My World")
    .css("display", "block")
    .appendTo($firstdiv);

  // P info for BIO
  const $biop = $("<p>")
    .text(
      "Hello my name is Dedrick McCluney I reside in Harrisburg, PA by way of Alabama. I have over a decade in logistics, supply, and warehouse work. I am willing to learn everyday if it was possible. I am now an inspiring software engineer  that wants to learn and share my ideas with a motivated team of developers."
    )
    .appendTo($2modal)
    .css("display", "none");


  // p info for Skills
  const $skillsp = $("<p>")
    .text(
      "Former Ammunition Stock Control Specialist with eight years serving in the United States Army. Excellent leadership skills, ability to carry out work with minimal supervision, attention to detail and ability to work under strict deadlines. Strong managerial, time management and communication skills. Can work with a team very easy going, ability to adapt in difficult situations.Willing to relocate: Anywhere"
    )
    .appendTo($3modal)
    .css("display", "none");


  const openModal = () => {
    $modal.show();
    $modal.css("display", "block");
  };
  $openBtn.on("click", openModal);

  const closeModal = () => {
    $modal.css("display", "none");
  };
  $closeBtn.on("click", closeModal);

  const openBio = () => {
    $biop.show("slow");
    $biop.css("display", "block");
    $biop.toggle();
  };
  $bioBtn.click(openBio);


  const openSkills = () => {
    $skillsp.show("slow");
    $skillsp.css("display", "block");
    $skillsp.toggle();
  };
  $skillsBtn.on("click", openSkills);

 
});
