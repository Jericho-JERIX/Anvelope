pipeline {
    agent { docker { image 'node:22.18.0-alpine3.22' } }
    environment {
        IMAGE_NAME = "anvelope-prod"
        IMAGE_TAG  = "latest"
        CONTAINER_NAME = "anvelope_prod_container"
        TOKEN=credentials('anvelope-token')
        CLIENT_ID=credentials('anvelope-client-id')
    }
    stages {
        stage('Pull from GitHub') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Jericho-JERIX/Anvelope.git'
            }
        }
        stage('Build Production') {
            steps {
                sh '''
                PATH=$PATH:/usr/bin/docker
                echo $(which docker)
                echo $PATH
                docker build -t $IMAGE_NAME:$IMAGE_TAG .
                '''
            }
        }
        stage('Deploy Production') {
            steps {
                sh '''
                PATH=$PATH:/usr/bin/docker
                docker rm -f $CONTAINER_NAME || true
                docker run -d --name $CONTAINER_NAME -p 3000:3000 $IMAGE_NAME:$IMAGE_TAG
                '''
            }
        }
    }
}
