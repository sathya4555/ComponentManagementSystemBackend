import { Body, Get, Header, Injectable, NotFoundException, Post, Query, Res } from '@nestjs/common';
import { BlobServiceClient, BlockBlobClient } from '@azure/storage-blob';
import { InjectRepository } from '@nestjs/typeorm';
import {getConnection} from "typeorm";
import { Repository } from 'typeorm';

import { AppService } from 'src/app.service';
import { Admin } from 'src/entity/admin.entity';
import { Data } from 'src/entity/data.entity';
import { dataDTO } from 'src/dto/data.dto';
import { Client } from 'src/entity/client.entity';
import { watchhistory } from 'src/entity/watchhistory.entity';
import { Draftdata } from 'src/entity/draftdata';
@Injectable()
export class ComponentService {

  constructor(
    @InjectRepository(Admin) private readonly adminRepository: Repository<Admin>,
    @InjectRepository(Data) private readonly dataRepository: Repository<Data>,
    @InjectRepository(Client) private readonly clientRepository: Repository<Client>,
    @InjectRepository(watchhistory) private readonly watchRepository: Repository<watchhistory>,
    @InjectRepository(Draftdata) private readonly draftRepository: Repository<Draftdata>
  
    ){}



    azureConnection ="DefaultEndpointsProtocol=https;AccountName=sathyakrishnacloud;AccountKey=uRD5KX03UO2Xxsw9+OmC9ITHgpAG4wPjV3XKUvesK6S0E2BUDLbfxpyvOsvHLzlCqt8FQqRLTO6/Ws8JO/VMoA==;EndpointSuffix=core.windows.net"
    containerName = "upload-file";

    getBlobClient(filename:string):BlockBlobClient{
        const blobClientService = BlobServiceClient.fromConnectionString(this.azureConnection);
        const containerClient = blobClientService.getContainerClient(this.containerName);
        const blobClient = containerClient.getBlockBlobClient(filename);
        return blobClient;
      }
     
      async upload(file:Express.Multer.File){
        const blobClient = this.getBlobClient(file.originalname);
        await blobClient.uploadData(file.buffer);
        console.log("inside upload function");
        console.log("name test",file.originalname);
        const emp: Data = new Data();
         const emp1: watchhistory= new watchhistory();
         emp.videoname = file.originalname
         emp1.vId = file.originalname
         await this.dataRepository.save(emp)
         await this.watchRepository.save(emp1)

         const emps: any[] = await this.dataRepository.find()
         //console.log("sathya")
         const empsdto: dataDTO[] = emps.map(x=> this.entityToDTO(x))
       
    //     this.dataRepository.findOne(emp.videoname)
    //     const user = await getConnection()
    //     .createQueryBuilder()
    //     .select("videoid")
    //     .from(Data, "videoid")
    //     .where("user.videoname = :videoname", { videoname: emp.videoname })
    //     .getOne();

    //     await getConnection()
    // .createQueryBuilder()
    // .insert()
    // .into(watchhistory)
    // .values({ 
    //     vId: user.videoid, 
    // })
    // .execute();

     console.log("Video Name",emp.videoname);
        console.log("Saved");
      }

      async getfileStream(fileName: string){
        const blobClient = this.getBlobClient(fileName);
        var blobDownloaded = await blobClient.download(0);
        return blobDownloaded.readableStreamBody;
      }
      private entityToDTO(data : Data): dataDTO{

        const datadto = new dataDTO();
        datadto.videoname = data.videoname
        datadto.videoid=data.videoid
        return datadto
    }
    
      async getTime(played: any,videoid: any){
        console.log("inside service played",played);
        const emp: Data = new Data();
        emp.timestamp=played
        console.log("video id= ",videoid);
        console.log("inside if");
       // await this.dataRepository.save(emp)


        //QueryBuilder
      //   const qb =  this.dataRepository.createQueryBuilder("data")
      // qb.insert() 
      // qb.into("")
     // var x = "32";
    //  var num = 15;
     let n = played.toString();

      await getConnection()
      .createQueryBuilder()
      .update(Data)
      .set({ 
        timestamp: n, 
          // age: () => "age + 1"   Function
      })
      .where("videoid = :videoid", { videoid: videoid })
      .execute();

      
      await getConnection()
      .createQueryBuilder()
      .update(watchhistory)
      .set({ 
        time: n,
 
          // age: () => "age + 1"   Function
      })
      .where("id = :id", { id: videoid })
      .execute();
    //   await getConnection()
    // .createQueryBuilder()
    // .insert()
    // .into(watchhistory)
    // .values({ 
    //   time: n,
    //   vId: videoid 
    // })
    // .execute();
       
    }
      async delete(@Body() body:any){
        const blobClient = this.getBlobClient(body.videoname);
        await blobClient.deleteIfExists()
        let emp: Data = await this.getOneData(body.id)
        emp.videoname=body.videioname
        await this.dataRepository.remove(emp)
      
        const empDto:any = this.entityToDTO(emp)
       return empDto

      }

      public async getOneData(empid: string)
{
    const emp: Data = await this.dataRepository.findOne(empid)
  // console.log("sathya")
    if(!emp) throw new NotFoundException(`Feature with ID ${empid} was not found`)
    let empdto: any = this.entityToDTO(emp)

    return empdto

}

       async register(data :any) {
         return this.clientRepository.save(data)
       }

       async findOne(condition: any): Promise<any>{
         console.log("inside findone");
         
         return this.clientRepository.findOne(condition)
       }

       async getall(){

        const emps: any[] = await this.dataRepository.find()
        //console.log("sathya")
        const empsdto: dataDTO[] = emps.map(x=> this.entityToDTO(x))
      
        return empsdto
      }


      async draftAdd(@Body() body:any){
        const emp: Draftdata = new Draftdata();
        emp.data = body.data
        emp.adminid=body.adminid
        var result =await this.draftRepository.save(emp)
       return result

      }



}
