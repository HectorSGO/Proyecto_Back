import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { UserService } from '@services/users.service';
import axios from 'axios';

export class PokemonController {
  public user = Container.get(UserService);

  public getCards = async (req: Request, res: Response, next: NextFunction) => {
    console.log(req);
    const pageNumber = req.query.page;
    const pageSize = req.query.pageSize;
    try {
      const response = await axios.get(`https://api.pokemontcg.io/v2/cards/?page=${pageNumber || 1}&pageSize=${pageSize}`);
      res.status(200).json({ data: response.data, message: 'findAll' });
      //console.log(response.data);
    } catch (error) {
      next(error);
    }
  };
  public getCardsOne = async (req: Request, res: Response, next: NextFunction) => {
    console.log(req);
    const autocomplemto = req.query.q;
    try {
      const response = await axios.get(`https://api.pokemontcg.io/v2/cards/?q=${autocomplemto}`);
      res.status(200).json({ data: response.data, message: 'findOne' });
      //console.log(response.data);
    } catch (error) {
      next(error);
    }
  };
}
