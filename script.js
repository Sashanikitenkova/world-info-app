let isFirstClick = true; 

$(document).ready(function() {
  $('#loadBtn').on('click', function() {

    const country = $('#countryInput').val().trim();
    if(!country) return alert('Please enter country');

    $('#countryInfo').fadeOut(300);

    const train = $('#train');
    train.removeClass('moving').hide();

    const animationDelay = isFirstClick ? 50 : 2000;
    const infoDelay = isFirstClick ? 2600 : 4200;
    
      $.ajax({
        url: `https://restcountries.com/v3.1/name/${country}`,
        method: 'GET',
        success: function (data) {
          
          const sound=$('#trainSounds')[0];
          sound.currentTime = 0;
          sound.play();
          train.show();
          
          setTimeout(() => {
            train.addClass('moving');
          }, animationDelay);
          
          setTimeout(function() {
            train.removeClass('moving');
            sound.pause();
          }, infoDelay + 3000);

          console.log(data);
          const countryInfo = data[0];
          
          const name = countryInfo.name.common;
          const flag = countryInfo.flags.svg;
          const shortName = countryInfo.cca2;
          const capital = countryInfo.capital ? countryInfo.capital[0] : 'No data';
          const currencies = countryInfo.currencies;
          const currencyName = currencies ? Object.values(currencies)[0].symbol : 'No data';
          const languages = countryInfo.languages;
          const languageName = languages ? Object.values(languages)[0] : 'No data';
          const continent = countryInfo.continents ? countryInfo.continents[0] : 'No data';


          setTimeout(() => {
            $('#countryName').text(name);
            $('#countryFlag').attr('src', flag);
            $('#countryCode').text(shortName);
            $('#countryCapital').text(capital);
            $('#countryCurrency').text(currencyName);
            $('#countryLanguage').text(languageName);
            $('#countryContinent').text(continent);

            $('#countryInfo').fadeIn(800);
            $('#countryInput').val('').focus();

          }, infoDelay + 200)
        },
        error: function() {
           M.toast({
            html: 'Sorry, we have no information available for the specified country',
            displayLength: 4000,
            classes: 'red darken-1 white-text rounded'
          });
          $('#countryInfo').fadeOut(300);
          $('#countryInput').val('').focus();
        }
      });

    isFirstClick = false;
  });
});
