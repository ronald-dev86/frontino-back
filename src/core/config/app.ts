import express from 'express';

import { UserRoute } from '../../users/infrastructure/routes/UserRoute';
import { AuthRoute } from '../../auth/infrastruture/routes/AuthRoute';
export class App {
  public app: express.Application;

  constructor() {
  
    this.app = express();
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));

    this.app.use(express.static('public'));

    this.app.listen(3000, () => {       
      console.log('Server is running on port 3000');
    });
    
    this.app.use('/api', new UserRoute().router);
    this.app.use('/api', new AuthRoute().router);
    
  }
}


