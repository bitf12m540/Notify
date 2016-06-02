


jQuery(document).ready(function () {
    $('#postForm').submit(function () {
        $.ajax({
            url: '@Url.Action("PostRequest")',
            dataType: "json",
            type: "POST",
            contentType: 'application/json; charset=utf-8',
            cache: false,
            data: JSON.stringify({
                post: $('#message').val(),

            }),
            success: function (data) {

                $('#newPost').prepend(

              "<div class='col-md-10 col-sm-6'><div class='row'> <div class='col-md-8 m-b-10'> <div class='widget-item narrow-margin'><div class='tiles white p-t-15  m-b-20'><div class='row'><div class='col-md-2'><div class='profile-img-wrapper pull-left m-l-10'> <div class=' p-r-10'> <img src='~/assets/img/profiles/h.jpg' alt='' data-src='~/assets/img/profiles/h.jpg' data-src-retina='~/assets/img/profiles/h2x.jpg' width='35' height='35'> </div> </div></div><div class='col-md-10'><div class='user-name text-black bold large-text'>Murtaza <span class='semi-bold'>Bhai</span> </div><div class='preview-wrapper'><span class='bold'>   "


              + data.message +



              "</span> </div></div></div><div class='post p-b-15 p-t-15 p-l-15 b-b b-grey'><ul class='action-bar no-margin '> <li><a href='#' class='muted'><i class='fa fa-comment m-r-5'></i> 24</a> </li>  <li><a href='#' class='text-error bold'> <i class='fa fa-heart-o  m-r-5'></i> 5</a> </li> </ul> <div class='clearfix'></div> </div><div class='clearfix'></div><div class='p-b-10 p-l-10 p-r-10'><div class='profile-img-wrapper pull-left'> <img width='35' height='35' alt='' src='~/assets/img/profiles/e.jpg' data-src='~/assets/img/profiles/e.jpg' data-src-retina='~/assets/img/profiles/e2x.jpg'> </div><div class='inline pull-right' style='width:86%'><form @*action='Comment/@p.ObjectId'*@ >  <table> <tr>  <td width='80%'><input type='text' style='width: 100%;' name='cccc' placeholder='Write a comment'></td><td width='10%'><button type='submit'  value='Submit'><span class='input-group-addon'><i class='fa fa-comment'></i></span></button></td></tr> </table></form></div> <div class='clearfix'></div> </div></div>  <div class='col-md-4 col-vlg-3 col-sm-6'> <div class='tiles blue added-margin  m-b-20'> <div class='tiles-body'><div class='tiles-title text-black'>Viewers STATS</div>  <div class='widget-stats'>  <div class='wrapper transparent'> <span class='item-title'>Total Viewers of this Post</span> <span class='item-count animate-number semi-bold' data-value='15489' data-animation-duration='700'>15,489</span> </div></div> <div class='progress transparent progress-small no-radius m-t-20' style='width:90%'> <div class='progress-bar progress-bar-white animate-progress-bar' data-percentage='54%' style='width: 54%;'></div></div><div class='description'> <span class='text-white mini-description '>54% of the students has seen it uptil now</span></div></div> </div></div></div></div></div></div>     "
                 );

                $('#message').val('');

            },
            error: function (xhr) {
                alert(' omer error');
            }
        });
        return false;
    });
});