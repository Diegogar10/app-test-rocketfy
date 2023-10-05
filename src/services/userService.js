const userService = (token) => {
  
  const UrlAPI = import.meta.env.VITE_API_USER;

  const query = async() => {
    const response = 
      await fetch(`${UrlAPI}auth/profile`, 
              {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`
                },
              });
    const data = await response.json();
    return data;
  }

  return query();
} 

export default userService;