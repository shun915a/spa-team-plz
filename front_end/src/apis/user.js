import axios from 'axios';

export const sessionApi = {
  login: ({email, password}) => {
    return (axios.post('/users/sign_in', {
        user: {
          email: email,
          password: password,
        }
      })
        .then(response => {
          console.log('success');
          return (response)
        })

    )
  },
  logout: () => {
    return (
      axios.delete(
        '/users/sign_out'
      )
        .then(response => {
          console.log('success');
          return (response)
        })
    )
  }
};

export const registrationApi = {
  signUp: ({email, password, password_confirmation, name}) => {
    return (axios.post('/users', {
        user: {
          name: name,
          email: email,
          password: password,
          password_confirmation: password_confirmation,
        }
      })
        .then(response => {
          console.log('success');
          return (response)
        })
    )
  }
};