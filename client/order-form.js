(function() {
  const API_ENDPOINT = 'https://s3-ap-southeast-1.amazonaws.com/static-pp'

  jQuery('#orderForm').submit(event => {
    event.preventDefault()

    console.log( $( this ).serialize() );
  })

  axios
    .get(`${API_ENDPOINT}/jobs/jobs.json`)
    .then(response => console.log(response))
})()