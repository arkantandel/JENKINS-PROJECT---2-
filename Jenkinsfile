pipeline {

    agent any

    environment {

        APP_NAME = "devops-app"
        CONTAINER_NAME = "devops-container"
        IMAGE_TAG = "latest"

    }

    stages {

        stage('Clone Code') {

            steps {

                echo "===== CLONING SOURCE CODE ====="

                git branch: 'main',
                url: 'https://github.com/arkantandel/JENKINS-PROJECT---2-.git'
            }
        }

        stage('Build Docker Image') {

            steps {

                echo "===== BUILD STAGE ====="

                sh 'docker build -t $APP_NAME:$IMAGE_TAG .'
            }
        }

        stage('Test Docker Image') {

            steps {

                echo "===== TEST STAGE ====="

                sh 'docker images'
            }
        }

        stage('Stop Old Container') {

            steps {

                sh '''
                docker stop $CONTAINER_NAME || true
                docker rm $CONTAINER_NAME || true
                '''
            }
        }

        stage('Run Container') {

            steps {

                echo "===== RUN CONTAINER ====="

                sh '''
                docker run -d \
                --name $CONTAINER_NAME \
                -p 8081:80 \
                $APP_NAME:$IMAGE_TAG
                '''
            }
        }

        stage('Deployment Verification') {

            steps {

                echo "===== DEPLOYMENT SUCCESS ====="

                sh 'docker ps'
            }
        }
    }

    post {

        success {

            echo "===== PIPELINE EXECUTED SUCCESSFULLY ====="
        }

        failure {

            echo "===== PIPELINE FAILED ====="
        }
    }
}
