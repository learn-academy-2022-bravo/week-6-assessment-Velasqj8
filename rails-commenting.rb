# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) Created a class called BlogPostsController that is inheriting from the parent class ApplicationController .
class BlogPostsController < ApplicationController
  def index
    # ---2) Created an instance variable called posts that is assigned to call all objects of BlogPost database. By making posts an instance variable we can now call it outside of the index method.
    @posts = BlogPost.all
  end

  # ---3) Defining a method called show that will be used to find the post that has the id defined in the params.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) Defining a method called new that will be used to create new post inside of BlogPost database.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) Assigning instance variable @post to create blog_post_params for BlogPost database if @post is considered valid. If valid, the create method will return the object and save it to the database.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6) Defining a method called edit that will be used to edit the post that has the id defined in the params.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) Assigning instance variable @post to update blog_post_params for BlogPost database if @post is considered valid. If valid, the update method will return the object and save it to the database.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) Using the else statment to redirect me to the home page if the post is destroyed, if not else statment will redirect me to give another input.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) Using the private method will tell Ruby from this point on all methods are suppose to be private.
  private
  def blog_post_params
    # ---10) Using the require method we are letting the user know we require the model blog_post but the permit method allows the title and content to be changed.
    params.require(:blog_post).permit(:title, :content)
  end
end
