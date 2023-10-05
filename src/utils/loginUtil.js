const loginUtil = (form) => {
  
  const UrlAPI = import.meta.env.VITE_API_USER;

  const formData = new FormData(form);
  const formJson = Object.fromEntries(formData.entries());

  const query = async() => {
    const response = 
      await fetch(`${UrlAPI}auth/login/`, 
              {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                }, 
                body:JSON.stringify(formJson)
              });
    const data = await response.json();
    return data;
  }

  return query();
} 

export default loginUtil;