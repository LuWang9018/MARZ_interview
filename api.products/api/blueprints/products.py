from flask import Blueprint, request
from marshmallow import ValidationError
from api.models import Product
from api.schemas import ProductSchema

product_blueprint = Blueprint('product_blueprint', __name__)

@product_blueprint.route('/all', methods=['GET'])
def get_all_products():
    product_schema = ProductSchema(many=True)
    try:
        products = Product.select().dicts()
        products_serialized = product_schema.dump(products)
    except Exception as err:
        return { 'data': [], 'message': str(err) }, 500
    return { 'data': products_serialized, 'message': '' }, 200

# @product_blueprint.route('/inpipeline', methods=['GET'])
# def get_inprogress_orders():
#     order_schema = OrderSchema(many=True)
#     try:
#         orders = Orders.select().where(
#             (Orders.OrderStatus == 'Queued') |
#             (Orders.OrderStatus == 'InProgress') |
#             (Orders.OrderStatus == 'QA')
#         ).dicts()
#         orders_serialized = order_schema.dump(orders)
#     except Exception as err:
#         return { 'data': [], 'message': str(err) }, 500
#     return { 'data': orders_serialized, 'message': '' }, 200

# @orders_blueprint.route('/update_status', methods=['POST'])
# def post_update_order_status():
#     order_schema = OrderSchema()
#     json_data = request.get_json()
#     if not json_data:
#         return { 'message': 'No order data provided!' }, 400
#     try:
#         order = order_schema.load(json_data)
#         Orders.update(**order).where(
#             Orders.OrderID == order['OrderID']
#         ).execute()
#     except ValidationError as err:
#         return { 'message': err.messages }, 422
#     except Exception as err:
#         return { 'message': str(err) }, 500
#     return { 'message': f'{order["OrderID"]} updated successfully!' }, 200
