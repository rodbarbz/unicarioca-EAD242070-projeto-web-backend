from flask import Flask, jsonify, request
from flask_cors import CORS
from pymongo import MongoClient


app = Flask(__name__)
CORS(app)

client = MongoClient('mongodb://mongo:uEEJScEYdUIUOUwHHfxEnkGhSCfoBXss@autorack.proxy.rlwy.net:38077')
db = client['ProjetosEscola']
collection = db['Projetos']


@app.route('/projects-insert', methods=['POST'])
def add_project():
    data = request.get_json()

    print(type(data.get('nomeProjeto')), type(data.get('responsavel')))
    nomeProjeto = data.get('nomeProjeto')
    responsavel = data.get('responsavel')
    email = data.get('email')
    data = data.get('dataHoje')
    # descricao = data.get('descricao')
    
    project = {
        'nomeProjeto': nomeProjeto,
        'responsavel': responsavel,
        'email': email,
        'data': data,
        # 'descricao': descricao
    }

    result = collection.insert_one(project)

    response = jsonify({'message': 'Dados recebidos com sucesso!', 'id': str(result.inserted_id)})
    response.headers.add('Access-Control-Allow-Origin', '*')

    return response

if __name__ == '__main__':
    app.run(debug=True)