import pkg from 'pg';

const { DatabaseError } = pkg;

export class ErrorHandler {

    ErrorHandler(){
        const errorObj = {
            message: "",
            status: 500
        }
    }

    static showError(error) {
        if(error instanceof DatabaseError){
            this.errorObj.message = "Erro aao acessar o banco de dados!"; 
            this.errorObj.status = 500;
            return this.errorObj;
        }
    }
}