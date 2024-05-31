export const getAllBooking = async (authString: string, authObject: { [key: string]: string }) => {
  const userObject = JSON.parse(authObject.user);
  const userId = userObject?.id;

  const response = await fetch(`${import.meta.env.VITE_BASE_URL}/bookings/${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authenticate: authString,
    },
  });

  const data = await response.json();
  return data;
};
