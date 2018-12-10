let defaultCity = '广州'
try {
  if (localStorage) {
    defaultCity = localStorage.city || '广州'
  }
} catch (error) {
  console.log('==========',error);
}

export default {
  city: defaultCity
}