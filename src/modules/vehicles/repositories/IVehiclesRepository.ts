import { ICreateVehicleDTO } from "../dtos/ICreateVehicleDTO";
import { IUpdateVehicleDTO } from "../dtos/IUpdateVehicleDTO";
import { Vehicle } from "../entities/Vehicle";

export interface IVehiclesRepository {
    create(data: ICreateVehicleDTO): Promise<Vehicle>;
    list(): Promise<Vehicle[]>;
    findById(id: string): Promise<Vehicle | undefined>;
    update(id: string, data: IUpdateVehicleDTO): Promise<Vehicle>;
    delete(id: string): Promise<void>;
    findByPlate(plate: string): Promise<Vehicle | undefined>;
    findByChassis(chassis: string): Promise<Vehicle | undefined>;
    findByRenavam(renavam: string): Promise<Vehicle | undefined>;
}
