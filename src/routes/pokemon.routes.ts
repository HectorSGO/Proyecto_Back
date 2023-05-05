import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import { PokemonController } from '@/controllers/pokemon.controller';

export class PokemonRoute implements Routes {
  public path = '/pokemon';
  public router = Router();
  public cartas = new PokemonController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.cartas.getCards);
    this.router.get(`${this.path}/one`, this.cartas.getCardsOne);
  }
}
