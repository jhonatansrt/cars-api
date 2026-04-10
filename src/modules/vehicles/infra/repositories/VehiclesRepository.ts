import { randomUUID } from "node:crypto";
import { ICreateVehicleDTO } from "../../dtos/ICreateVehicleDTO";
import { IUpdateVehicleDTO } from "../../dtos/IUpdateVehicleDTO";
import { Vehicle } from "../../entities/Vehicle";
import { IVehiclesRepository } from "../../repositories/IVehiclesRepository";

export class VehiclesRepository implements IVehiclesRepository {
    private vehicles: Vehicle[] = [];

    async create(data: ICreateVehicleDTO): Promise<Vehicle> {
        const vehicle: Vehicle = {
            id: randomUUID(),
            ...data,
        };

        this.vehicles.push(vehicle);

        return vehicle;
    }

    async list(): Promise<Vehicle[]> {
        return this.vehicles;
    }

    async findById(id: string): Promise<Vehicle | undefined> {
        return this.vehicles.find(vehicle => vehicle.id === id);
    }

    async update(id: string, data: IUpdateVehicleDTO): Promise<Vehicle> {
        const index = this.vehicles.findIndex(vehicle => vehicle.id === id);

        const updatedVehicle = {
            ...this.vehicles[index],
            ...data,
        };

        this.vehicles[index] = updatedVehicle;

        return updatedVehicle;
    }

    async delete(id: string): Promise<void> {
        this.vehicles = this.vehicles.filter(vehicle => vehicle.id !== id);
    }

    async findByPlate(plate: string): Promise<Vehicle | undefined> {
        return this.vehicles.find(vehicle => vehicle.plate === plate);
    }

    async findByChassis(chassis: string): Promise<Vehicle | undefined> {
        return this.vehicles.find(vehicle => vehicle.chassis === chassis);
    }

    async findByRenavam(renavam: string): Promise<Vehicle | undefined> {
        return this.vehicles.find(vehicle => vehicle.renavam === renavam);
    }
}
