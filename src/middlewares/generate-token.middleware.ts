// import { HttpErrors, Middleware } from "@loopback/rest";
// import { promisify } from "util";

// const jwt = require('jsonwebtoken');
// const signAsync = promisify(jwt.sign);

// export const createToken: Middleware = async (middlewareCtx, next) => {
//     const {request} = middlewareCtx;
//     console.log('Request: %s %s', request.method, request.originalUrl);
    
//       // Proceed with next middleware
//       if (!request.headers || !request.headers.cookie) {
//         throw new HttpErrors.Unauthorized(
//           'Error generating token : usercookie is null',
//         );
//       }
//       const cookie =  JSON.parse(request.headers.cookie)
//       const userId = cookie.userId
//       const userRole =  cookie.role
//       const jwtSecret = process.env.JWT_SECRET
//       const jwtExpiresIn = process.env.JWT_EXPIRE

//       const userInfoForToken = {
//         id: userId,
//         // name: userProfile.name,
//         roles: userRole,
//       };
//       // Generate a JSON Web Token
//       let token: string;
//       try {
//         token = await signAsync(userInfoForToken,jwtSecret, {
//           expiresIn: Number(jwtExpiresIn),
//         });
//         request.headers['Authorization'] = `Bearer ${token}`;

//       const result = await next();
//       return result;
    
//     } catch (err) {
//       // Catch errors from downstream middleware
//       console.error(
//         'Error received for %s %s',
//         request.method,
//         request.originalUrl,
//       );
//       throw err;
//     }
//   };
  
// //   app.middleware(log);