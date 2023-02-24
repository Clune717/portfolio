console.log('hello world')

$(() => {
  // const $modal = ("#modal");
  // const $btn = ("#model-button")

  // const openModal = () => {
  //     $modal.css('display', 'block')
  // }
  // $btn.on('click', open)
  // console.log(yes)

  const $openBtn = $("#openModal");

  const $modal = $("#modal");
  const $openTxt = $("#modalTextbox");
  const $closeBtn = $("#close");

  // const $openBio = $('#openBio')

  const openModal = () => {
    $modal.css("display", "block");
  };
  $openBtn.on("click", openModal);

  const modalTextbox = () => {
    $openTxt.css('display', 'inline-block');
  }
  $openTxt.on('click', modalTextbox)

  const closeModal = () => {
    $modal.css("display", "none");
  };
  $closeBtn.on("click", closeModal);

  // const openBio = () =>{
  //     $modal.css('display', 'block')
  // }
  // $openBtn.on('click', openBio)
});




//$('<p>').text('Hello my name is Dedrick McCluney I reside in Harrisburg, PA by way of Alabama. I have over a decade in logistics, supply, and warehouse work. I am willing to learn everyday if it was possible. I am now an inspiring software engineer  that wants to learn and share my ideas with a motivated team of developers.').