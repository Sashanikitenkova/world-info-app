// $(document).ready(function() {
//   $('#loadBtn').on('click', function() {

//     const country = $('#countryInput').val().trim();
//     if(!country) return alert('Please enter country');

//     $('#countryInfo').fadeOut(300);

//     const train = $('#train');
//     train.show().removeClass('moving');

//     setTimeout(() => {
//       train.addClass('moving');
//     }, 2000);


//     setTimeout(() => {
//       $.ajax({
//         url: `https://restcountries.com/v3.1/name/${country}`,
//         method: 'GET',
//         success: function (data) {
//           console.log(data);
//           const countryInfo = data[0];
          
//           const name = countryInfo.name.common;
//           const flag = countryInfo.flags.svg;
//           const shortName = countryInfo.cca2;
//           const capital = countryInfo.capital ? countryInfo.capital[0] : 'No data';
//           const currencies = countryInfo.currencies;
//           const currencyName = currencies ? Object.values(currencies)[0].symbol : 'No data';
//           const languages = countryInfo.languages;
//           const languageName = languages ? Object.values(languages)[0] : 'No data';
//           const continent = countryInfo.continents ? countryInfo.continents[0] : 'No data';

//           $('#countryName').text(name);
//           $('#countryFlag').attr('src', flag);
//           $('#countryCode').text(shortName);
//           $('#countryCapital').text(capital);
//           $('#countryCurrency').text(currencyName);
//           $('#countryLanguage').text(languageName);
//           $('#countryContinent').text(continent);

//           $('#countryInfo').fadeIn(800);

//           $('#countryInput').val('').focus();
//         },
//         error: function() {
//           alert('Request failed. Country not found.');
//           $('#countryInfo').fadeOut(300);
//           $('#countryInput').val('').focus();
//         }
//       });
//     }, 2500); 

//   });
// });





// let isFirstClick = true; 

// $(document).ready(function() {
//   $('#loadBtn').on('click', function() {

//     const country = $('#countryInput').val().trim();
//     if(!country) return alert('Please enter country');

//     $('#countryInfo').fadeOut(300);

//     const train = $('#train');
//     train.removeClass('moving').show();

//     const animationDelay = isFirstClick ? 50 : 2000;
//     const infoDelay = isFirstClick ? 2600 : 4200;

//     setTimeout(() => {
//       train.addClass('moving');
//     }, animationDelay);

//     setTimeout(() => {
//       $.ajax({
//         url: `https://restcountries.com/v3.1/name/${country}`,
//         method: 'GET',
//         success: function (data) {
//           const countryInfo = data[0];
          
//           const name = countryInfo.name.common;
//           const flag = countryInfo.flags.svg;
//           const shortName = countryInfo.cca2;
//           const capital = countryInfo.capital ? countryInfo.capital[0] : 'No data';
//           const currencies = countryInfo.currencies;
//           const currencyName = currencies ? Object.values(currencies)[0].symbol : 'No data';
//           const languages = countryInfo.languages;
//           const languageName = languages ? Object.values(languages)[0] : 'No data';
//           const continent = countryInfo.continents ? countryInfo.continents[0] : 'No data';

//           $('#countryName').text(name);
//           $('#countryFlag').attr('src', flag);
//           $('#countryCode').text(shortName);
//           $('#countryCapital').text(capital);
//           $('#countryCurrency').text(currencyName);
//           $('#countryLanguage').text(languageName);
//           $('#countryContinent').text(continent);

//           $('#countryInfo').fadeIn(800);
//           $('#countryInput').val('').focus();
//         },
//         error: function() {
//           alert('Request failed. Country not found.');
//           $('#countryInfo').fadeOut(300);
//           $('#countryInput').val('').focus();
//         }
//       });
//     }, infoDelay);

//     isFirstClick = false;
//   });
// });


