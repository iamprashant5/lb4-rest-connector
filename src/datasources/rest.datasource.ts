import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';
const baseURL='https://jsonplaceholder.typicode.com/users'
const config = {
  name: 'rest',
  connector: 'rest',
  localStorage: '',
  file: '',
  baseURL:baseURL,
  options: {
    headers: {
      "accept": "application/json",
      "content-type": "application/json"
    }
  },
  // operations:[{
  //   template:{
  //     method:'GET',
  //     url:`${baseURL}/new-users`,
  //     // responsePath:'$.result.addressMatches[*].coordinates'
  //   },
  //   functions:{
  //     find:[]
  //   }}]
    operations: [
      {
        template: {
          method: 'GET',
          url: baseURL,
          query: {
            format: '{format=json}',
            benchmark: 'Public_AR_Current',
            // address: '{address}',
          },
          responsePath: '$',
        },
        functions: {
          find: [],
        },
      },
    ],
//   },{
//     template:{
//       method:'POST',
//       url:`${baseURL}/users`,
//       // responsePath:'$.result.addressMatches[*].coordinates'
//       body:'{body}'
//     },
//     functions:{
//       create:['body']
//     }
//   },{
//     template:{
//       method:'GET',
//       url:`${baseURL}/users/:id`,
//       // responsePath:'$.result.addressMatches[*].coordinates'
//       query: {
//         id: '{id}',
//       }
//     },
//     functions:{
//       findById:['id']
//     }
//   },{
//     template:{
//       method:'PATCH',
//       url:`${baseURL}/users/:id`,
//       // responsePath:'$.result.addressMatches[*].coordinates'
//       query: {
//         id: '{id}',
//       },
//       body:'{body}'
//     },
//     functions:{
//       update:['id','body']
//     }
//   },{
//     template:{
//       method:'DELETE',
//       url:`${baseURL}/users/:id`,
//       // responsePath:'$.result.addressMatches[*].coordinates'
//       query: {
//         id: '{id}',
//       }
//     },
//     functions:{
//       delete:['id']
//     }
//   }
// ]
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class RestDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'rest';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.rest', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
