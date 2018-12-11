var formatListing = (review) => {
    let {
        display_title,
        mpaa_rating,
        byline,
        publication_date,
        summary_short,
        multimedia
    } = review;
    return `<div class="card col-3">
  <img class="card-img-top " src="${multimedia.src}" alt="No image available">
  <div class="card-body">
    <h5 class="card-title">${display_title}</h5>
    <p class="card-text">${byline}</p>
    <p class="card-text"> Rating: ${mpaa_rating ? mpaa_rating : "N/A"}</p>
    <p class=""> Publication Date: ${publication_date ? publication_date : "N/A"}</p>
    <p class="card-text"> summary: ${summary_short}</p>
  </div>
</div>`;
};
$(document).ready(function () {

    var url = "https://api.nytimes.com/svc/movies/v2/reviews/search.json";
    url += '?' + $.param({
        'api-key': "e339a5be768f459aaa4e301da53d2281"
    });
    $.ajax({
        url: url,
        method: 'GET',
    }).done(function(data) {
        data.results.forEach( review =>{
            $('.review_list').append(formatListing(review))
        })
    }).fail(function(err) {
        throw err;
    });
});


function serializeForm() {
    $('input').val(function () {
        return this.value.toUpperCase();
    });
    let args = $('#query-form').serialize();//.replace('state=State','');
    args = args.replace('state=State', '').replace('plate=&', '').replace('make=&', '').replace('color=&', '').replace('style=&', '');
    return args;
}

function clearTable() {
    $('#listings').html('');
}

