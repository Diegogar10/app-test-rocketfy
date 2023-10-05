const registerUtil = (form) => {
  
  const UrlAPI = import.meta.env.VITE_API_USER;

  const formData = new FormData(form);

  const formJson = Object.fromEntries(formData.entries());
  const newFormJson = {
    ...formJson,
    "avatar": "https://api.lorem.space/image/3w"
  }

  const query = async() => {
    const response = 
      await fetch(`${UrlAPI}users/`, 
              {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                }, 
                body:JSON.stringify(newFormJson)
              });
    return response;
  }

  return query();
} 

export default registerUtil;