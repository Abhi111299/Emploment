import permission from "../models/permission.js";
import PermissionModel from "../models/permission.js";

const getPermissions = async (req, reply) => {
  const permissions = await PermissionModel.find();
  reply.send({
    count: permissions.length,
    permissions: permissions,
    pagination: "jksdjkffjksd/klsdfksdfkld/sklfskdf?skip=10&take=10",
  });
};

const getPermission = async (req, reply) => {
  const { id } = req.params;
  const permission = await PermissionModel.findById(id);
  reply.code(200).send({ message: `Permission complete data`, permission });
};

const addPermission = async (req, reply) => {
  const body = req.body;
  const permission = await PermissionModel.create(body);
  reply.code(201).send({ message: `Permission has been added`, permission });
};

const deletePermission = async (req, reply) => {
  const id = req.params.id;
  const permission = await PermissionModel.findByIdAndRemove(id).exec();
  reply
    .code(200)
    .send({ message: `Permission ${id} has been removed`, permission });
};

const updatePermission = async (req, reply) => {
  const id = req.params.id;
  const data = {
    name: req.body.name,
    api: req.body.api,
    method: req.body.method,
  };
  const permission = await PermissionModel.findByIdAndUpdate(id, data, {
    new: true,
  }).exec();
  reply
    .code(200)
    .send({ message: `Permission ${id} has been updated`, permission });
};
const PermissionsController = {
  getPermissions,
  getPermission,
  addPermission,
  deletePermission,
  updatePermission,
};
export default PermissionsController;
