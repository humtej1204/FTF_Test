# FTF_Test
Project that consumes Github API to access repository data, commit history and user data, and display them in the designed interface.
## Used Technologies
* Angular
* Tailwind CSS
* SCSS (Sass)
* NestJS
* TypeScript
* GraphQL
* Docker
* HTML
* Octokit (for integration with GitHub)
## Previous Requirements
Make sure you have the following installed on your system:
* Git (Git Terminal/Git Bash)
* Docker
* GitHub Token (To access GitHub API)
### Git Installation
To download the project, it's necessary to have the GitHub application installed on your machine. You can download it as follows:
1. Download the Git terminal from: https://git-scm.com/download/win
   
   ![](https://raw.githubusercontent.com/humtej1204/FTF_Test/main/assets/git_step_01.png)
   
2. Select the version for your operating system:
  * Check Processor on Linux
    a. On Linux, it's easy. Just open a terminal or command prompt and enter the command: `lscpu`
    b. This command will give you information about your PC's architecture and whether it can run 32-bit or 64-bit.
  * Check Processor on Windows
    a. To find out what type of CPU you have on Windows, follow these steps:
      - Open your `Windows PC > Control Panel > System and Security > System`.
      - From here, you'll see all the information about your computer.
  * Check Processor on Mac OSX
    a. Click on the Apple icon and then `About This Mac`.
    b. From this window, you'll find out whether you have a 32-bit or 64-bit processor.
3. Locate the downloaded file, run it, and follow the steps to install the application.

   ![](https://raw.githubusercontent.com/humtej1204/FTF_Test/main/assets/git_step_02.png)
   ![](https://raw.githubusercontent.com/humtej1204/FTF_Test/main/assets/git_step_03.png)
   ![](https://raw.githubusercontent.com/humtej1204/FTF_Test/main/assets/git_step_04.png)
   ![](https://raw.githubusercontent.com/humtej1204/FTF_Test/main/assets/git_step_05.png)
   ![](https://raw.githubusercontent.com/humtej1204/FTF_Test/main/assets/git_step_06.png)
   ![](https://raw.githubusercontent.com/humtej1204/FTF_Test/main/assets/git_step_07.png)
   ![](https://raw.githubusercontent.com/humtej1204/FTF_Test/main/assets/git_step_08.png)
   ![](https://raw.githubusercontent.com/humtej1204/FTF_Test/main/assets/git_step_09.png)
   ![](https://raw.githubusercontent.com/humtej1204/FTF_Test/main/assets/git_step_10.png)
   ![](https://raw.githubusercontent.com/humtej1204/FTF_Test/main/assets/git_step_11.png)
   ![](https://raw.githubusercontent.com/humtej1204/FTF_Test/main/assets/git_step_12.png)
   ![](https://raw.githubusercontent.com/humtej1204/FTF_Test/main/assets/git_step_13.png)
   ![](https://raw.githubusercontent.com/humtej1204/FTF_Test/main/assets/git_step_14.png)
   ![](https://raw.githubusercontent.com/humtej1204/FTF_Test/main/assets/git_step_15.png)
   ![](https://raw.githubusercontent.com/humtej1204/FTF_Test/main/assets/git_step_16.png)
   ![](https://raw.githubusercontent.com/humtej1204/FTF_Test/main/assets/git_step_17.png)
   ![](https://raw.githubusercontent.com/humtej1204/FTF_Test/main/assets/git_step_18.png)

4. After installation, a window will appear.

   ![](https://raw.githubusercontent.com/humtej1204/FTF_Test/main/assets/git_step_19.png)
   
  * If the window doesn't open automatically, search for the `Git Bash` application among your programs.
5. Go back to the repository page:
  https://github.com/humtej1204/FTF_Test
  Click on the `<> Code` button and copy the path to download the project locally.

   ![](https://raw.githubusercontent.com/humtej1204/FTF_Test/main/assets/git_step_20.png)
   
6. In the terminal, enter the following command: `git clone [project_url]`
  * In this case we have to use: `git clone https://github.com/humtej1204/FTF_Test.git`
    
   ![](https://raw.githubusercontent.com/humtej1204/FTF_Test/main/assets/git_step_21.png)
   ![](https://raw.githubusercontent.com/humtej1204/FTF_Test/main/assets/git_step_22.png)
   
  * To find out where the files were downloaded, run the `pwd` command. The project folder is named `FTF_Test`.
    
   ![](https://raw.githubusercontent.com/humtej1204/FTF_Test/main/assets/git_step_23.png)
   ![](https://raw.githubusercontent.com/humtej1204/FTF_Test/main/assets/git_step_24.png)

### Docker Installation
Now that we have the project files downloaded on our machine, we want to deploy the project to view it. For this purpose, this project has the configuration for deploying the application using the Docker tool.

Now, to bring up the project:

1. Download Docker from this link
   
   ![](https://github.com/humtej1204/FTF_Test/blob/main/assets/docker_step_01.png)
   
  * Select the operating system you are using and download the application.
2. Install Docker following the instructions in the downloaded file.

   ![](https://github.com/humtej1204/FTF_Test/blob/main/assets/docker_step_02.png)
   ![](https://github.com/humtej1204/FTF_Test/blob/main/assets/docker_step_03.png)
   ![](https://github.com/humtej1204/FTF_Test/blob/main/assets/docker_step_04.png)
   
3. Open Docker and follow the initial instructions.

   ![](https://github.com/humtej1204/FTF_Test/blob/main/assets/docker_step_05.png)
   
  * Accept the terms of service.
    
   ![](https://github.com/humtej1204/FTF_Test/blob/main/assets/docker_step_06.png)

  * Click on `Continue without signing in`.
    
   ![](https://github.com/humtej1204/FTF_Test/blob/main/assets/docker_step_07.png)
   
  * Click on the `Skip` button.
    
   ![](https://github.com/humtej1204/FTF_Test/blob/main/assets/docker_step_08.png)

  * You will now enter the Docker application.
    
   ![](https://github.com/humtej1204/FTF_Test/blob/main/assets/docker_step_09.png)

### Generate Personal Access Token to Github
For our application to work correctly, we need a token that GitHub can use to identify us and grant permissions to access protected routes.

1. Go to https://github.com and click `Sign in`.
   
   ![](https://github.com/humtej1204/FTF_Test/blob/main/assets/ghtk_step_01.png)
   
  * Enter your `username/email` and the `password` for your account to access.
   
   ![](https://github.com/humtej1204/FTF_Test/blob/main/assets/ghtk_step_02.png)
  
  * *Note: If you don't have an account on the platform, you must create one by clicking on the section that says `Create an account`.
2. Once logged in, go to settings.
   
   ![](https://github.com/humtej1204/FTF_Test/blob/main/assets/ghtk_step_03.png)
   ![](https://github.com/humtej1204/FTF_Test/blob/main/assets/ghtk_step_04.png)
  
3. From the sidebar, choose `Developer Settings`.*
   
   ![](https://github.com/humtej1204/FTF_Test/blob/main/assets/ghtk_step_05.png)
  
4. Go to `Personal Access tokens > Tokens (classic)` and click `Generate new token`.
   
   ![](https://github.com/humtej1204/FTF_Test/blob/main/assets/ghtk_step_06.png)
  
5. Upon entering, fill in the `Note` field describing the token's purpose, set an `expiration date`, and within the `Select scopes` section, only check the `public_repo` option. Finally, click the `Generate token` button.
   
   ![](https://github.com/humtej1204/FTF_Test/blob/main/assets/ghtk_step_07.png)
   ![](https://github.com/humtej1204/FTF_Test/blob/main/assets/ghtk_step_08.png)
  
6. After completing, a screen with the token will appear. It's crucial to copy the generated token somewhere, as it will be shown only once, and we'll use this token to ensure our application works correctly.
   
   ![](https://github.com/humtej1204/FTF_Test/blob/main/assets/ghtk_step_09.png)

## Installation and deployment
Verify that Docker is running in Git Bash using `docker -v`.

   ![](https://github.com/humtej1204/FTF_Test/blob/main/assets/deploy_step_01.png)

1. Navigate to the project directory: `cd FTF_Test`
   
   ![](https://github.com/humtej1204/FTF_Test/blob/main/assets/deploy_step_02.png)

2. Once inside, we need to modify the file called `docker-compose.yml`, to do this, run the following command: `nano docker-compose.yml`:
   
   ![](https://github.com/humtej1204/FTF_Test/blob/main/assets/deploy_step_03.png)

  * This will open the text editor in git bash. There, go to the line `GH_TOKEN=` and add the GitHub token we created earlier.
    
   ![](https://github.com/humtej1204/FTF_Test/blob/main/assets/deploy_step_04.png)

  * To exit and save, press `ctrl + X`.
    
   ![](https://github.com/humtej1204/FTF_Test/blob/main/assets/deploy_step_05.png)

  * Now press the `y` key to save the changes, and in the next window, press `enter`.
    
   ![](https://github.com/humtej1204/FTF_Test/blob/main/assets/deploy_step_06.png)

  * With that, we will have added our verification token to the application.
3. Now it's time to build the Docker image; we do this with the command `docker-compose build`.
    
   ![](https://github.com/humtej1204/FTF_Test/blob/main/assets/deploy_step_07.png)

  * Wait for a few minutes for the build to complete.
4. Once the build is finished, you just need to start the application with the command `docker-compose up`.
    
   ![](https://github.com/humtej1204/FTF_Test/blob/main/assets/deploy_step_08.png)

  * Wait for a few minutes for the application to start.
    
   ![](https://github.com/humtej1204/FTF_Test/blob/main/assets/deploy_step_09.png)

  * Access the application at
    http://localhost:4200/
    
   ![](https://github.com/humtej1204/FTF_Test/blob/main/assets/deploy_step_10.png)

