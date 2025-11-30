pipeline {
    agent any
    stages {
        stage('Stop Existing Containers') {
            steps {
                sh '''
                sudo docker-compose down || true
                '''
            }
        }
        stage('Build and Run Container') {
            steps {
                withCredentials([file(credentialsId: 'anvelope-env-file', variable: 'SECRET_FILE')]) {
                    sh '''

                    if [ -f "$SECRET_FILE" ]; then
                        cp "$SECRET_FILE" .env
                    else
                        echo "❌ ERROR: SECRET_FILE not found"
                        exit 1
                    fi
                    
                    sudo docker-compose up -d --build
                    
                    rm -f .env
                    '''
                }
            }
        }
    }
}
