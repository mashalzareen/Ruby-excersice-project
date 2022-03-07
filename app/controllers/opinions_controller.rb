# frozen_string_literal: true

class OpinionsController < ApplicationController
  before_action :find_post
  before_action :find_opinion, only: %i[destroy show]

  def index
    @opinions = @post.opinions
  end

  def show; end

  def new
    @opinion = @post.opinions.new
  end

  def create
    @opinion = @post.opinions.build(opinion_params)
    if @opinion.save
      redirect_to post_opinions_path
    else
      render :new
    end
  end

  def destroy
    @opinion.destroy
    respond_to do |format|
      format.html { redirect_to post_opinions_path, notice: 'comment was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  def find_opinion
    @opinion = @post.opinions.find(params[:id])
  end

  def find_post
    @post = Post.find(params[:post_id])
  end

  def opinion_params
    # params.permit(:statment , :post_id)
    params.require(:opinion).permit(:statment)
  end
end
