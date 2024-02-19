from xmlrpc.server import SimpleXMLRPCServer

def multiply_numbers(a, b):
    return a * b

def add_numbers(a, b):
    return a + b

def subtract_numbers(a, b):
    return a - b

def divide_numbers(a, b):
    if b == 0:
        return "Error: No se puede dividir por cero."
    return a / b

server = SimpleXMLRPCServer(("0.0.0.0", 12345))
server.register_function(multiply_numbers, "multiply_numbers")
server.register_function(add_numbers, "add_numbers")
server.register_function(subtract_numbers, "subtract_numbers")
server.register_function(divide_numbers, "divide_numbers")

print("Server listening on port 12345")
server.serve_forever()
