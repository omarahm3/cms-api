import { Request, Response } from "express";
// import Author from "../db/models/Author.model";
import logger from "../common/logger";

class MainController {

  main(_: Request, res: Response) {
    logger.debug('routes.main:: Main endpoint')

    return res.json({
      succss: true,
      message: 'main controller'
    })
  }

  async createAuthor(req: Request, res: Response) {
    // const { body } = req
    //
    // logger.debug('MainController.createAuthor:: Body %j', body)
    //
    // const author = Author.build(body)
    //
    // try {
    //   const result = await author.save()
    //   logger.debug(result)
    //
    //   return res.json({
    //     succss: true,
    //     message: 'got it',
    //     author: result.toJSON()
    //   })
    // } catch (err: any) {
    //   logger.debug(err)
    //   return res.json({
    //     succss: false,
    //     message: 'something happend'
    //   })
    // }
  }

  async removeAuthor(req: Request, res: Response) {
    // const { id } = req.params
    //
    // logger.debug('MainController.removeAuthor:: ID %j', id)
    //
    // try {
    //   const author = await Author.findOne({ where: {
    //     id: id
    //   }})
    //
    //   logger.debug('MainController.removeAuthor:: Found author %j', author)
    //
    //   await author.destroy({})
    //
    //   return res.json({
    //     succss: true,
    //     message: 'author removed'
    //   })
    // } catch (err: any) {
    //   logger.debug(err)
    //   return res.json({
    //     succss: false,
    //     message: 'something happend'
    //   })
    // }
  }

}

export default MainController
