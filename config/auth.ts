/**
 * Config source: https://git.io/JY0mp
 *
 * Feel free to let us know via PR, if you find something broken in this config
 * file.
 */

import type { AuthConfig } from '@ioc:Adonis/Addons/Auth'
import Env from "@ioc:Adonis/Core/Env";

/*
|--------------------------------------------------------------------------
| Authentication Mapping
|--------------------------------------------------------------------------
|
| List of available authentication mapping. You must first define them
| inside the `contracts/auth.ts` file before mentioning them here.
|
*/
const authConfig: AuthConfig = {
  guard: 'jwt',
  guards: {
    /*
    |--------------------------------------------------------------------------
    | Basic Auth Guard
    |--------------------------------------------------------------------------
    |
    | Uses Basic auth to authenticate an HTTP request. There is no concept of
    | "login" and "logout" with basic auth. You just authenticate the requests
    | using a middleware and browser will prompt the user to enter their login
    | details
    |
    */
    basic: {
      driver: 'basic',
      realm: 'Login',

      provider: {
        /*
        |--------------------------------------------------------------------------
        | Driver
        |--------------------------------------------------------------------------
        |
        | Name of the driver
        |
        */
        driver: 'lucid',

        /*
        |--------------------------------------------------------------------------
        | Identifier key
        |--------------------------------------------------------------------------
        |
        | The identifier key is the unique key on the model. In most cases specifying
        | the primary key is the right choice.
        |
        */
        identifierKey: 'id',

        /*
        |--------------------------------------------------------------------------
        | Uids
        |--------------------------------------------------------------------------
        |
        | Uids are used to search a user against one of the mentioned columns. During
        | login, the auth module will search the user mentioned value against one
        | of the mentioned columns to find their user record.
        |
        */
        uids: ['email'],

        /*
        |--------------------------------------------------------------------------
        | Model
        |--------------------------------------------------------------------------
        |
        | The model to use for fetching or finding users. The model is imported
        | lazily since the config files are read way earlier in the lifecycle
        | of booting the app and the models may not be in a usable state at
        | that time.
        |
        */
        model: () => import('App/Models/Karyawan'),
      },
    },
    jwt: {
      driver: "jwt",
      publicKey: Env.get('JWT_PUBLIC_KEY').replace(/\\n/g, '\n'),
      privateKey: Env.get('JWT_PRIVATE_KEY').replace(/\\n/g, '\n'),
      persistJwt: true,
      jwtDefaultExpire: '1h',
      refreshTokenDefaultExpire: '1d',
      tokenProvider: {
        type: 'api',
        driver: 'database',
        table: 'jwt_tokens',
        foreignKey: 'user_id'
      },
      provider: {
        driver: "lucid",
        identifierKey: "id",
        uids: [],
        model: () => import('App/Models/Karyawan')
      }
    },
  },
}

export default authConfig
