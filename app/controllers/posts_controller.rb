# frozen_string_literal: true

class PostsController < ApplicationController
  before_action :find_post, only: %i[update destroy edit show like]
  before_action :find_user, only: %i[create new index]
  respond_to :js, :json, :html

  def index
    @posts = @user.posts.all

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render xml: @posts }
      format.json { render json: @posts }
      format.atom
    end
  end

  def public
    @posts = Post.published
  end

  def show; end

  def new
    @post = @user.posts.new
  end

  def create
    @post = @user.posts.create(post_params)

    if @post.save
      redirect_to posts_path
    else
      render :new
    end
  end

  def edit; end

  def update
    if @post.update(post_params)
      redirect_to posts_path
    else
      render :edit
    end
  end

  def like
    @post = Post.all.find(params[:id])
    Like.create(user_id: current_user.id, post_id: @post.id)
    redirect_to posts_path
  end

  def destroy
    @post.destroy
    respond_to do |format|
      format.html { redirect_to posts_path, notice: 'post was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  def find_post
    @post = Post.find(params[:id])
  end

  def find_user
    @user = current_user
  end

  def post_params
    params.require(:post).permit(:title, :description, :avatar, :published)
  end
end
