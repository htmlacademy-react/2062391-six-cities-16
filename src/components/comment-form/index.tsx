import React, { useState } from 'react';

import {
  CommentRatingStars,
  MAX_RATING_STARS,
  MAX_REVIEW_LENGTH,
} from '../../constants';

type Form = {
  rating: number;
  review: string;
};

const commentFormInitValue = {
  rating: 0,
  review: '',
};

export default function CommentForm() {
  const [form, setForm] = useState<Form>(commentFormInitValue);

  function commentFormHandler(evt: React.MouseEvent<HTMLInputElement>) {
    const { name, value } = evt.target as HTMLInputElement;
    setForm({ ...form, [name]: value });
  }

  function commentButtonHandler(evt: React.MouseEvent<HTMLButtonElement>) {
    evt.preventDefault(), clearCommentForm();
  }

  function clearCommentForm() {
    setForm(commentFormInitValue);
  }

  return (
    <>
      <form className="reviews__form form" action="#" method="post">
        <label className="reviews__label form__label" htmlFor="review">
          Your review
        </label>
        <div className="reviews__rating-form form__rating">
          {CommentRatingStars.map((rating, indx) => {
            return (
              <>
                <input
                  className="form__rating-input visually-hidden"
                  name="rating"
                  value={MAX_RATING_STARS - indx}
                  id={`${MAX_RATING_STARS - indx}-stars`}
                  type="radio"
                  onClick={commentFormHandler}
                  checked={form.rating === 0 ? false : true}
                />
                <label
                  htmlFor={`${MAX_RATING_STARS - indx}-stars`}
                  className="reviews__rating-label form__rating-label"
                  title={rating}
                >
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>
              </>
            );
          })}
        </div>
        <textarea
          className="reviews__textarea form__textarea"
          id="review"
          name="review"
          value={form.review}
          maxLength={50}
          placeholder="Tell how was your stay, what you like and what can be improved"
          onChange={(evt: React.ChangeEvent<HTMLTextAreaElement>) => {
            setForm({ ...form, review: evt.target.value });
          }}
        ></textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set{' '}
            <span className="reviews__star">rating</span> and describe your stay
            with at least{' '}
            <b className="reviews__text-amount">{`${
              MAX_REVIEW_LENGTH - form.review.length
            } ${
              form.review.length === MAX_REVIEW_LENGTH - 1
                ? 'character'
                : 'characters'
            }`}</b>
            .
          </p>
          <button
            className="reviews__submit form__submit button"
            type="submit"
            disabled={form.review.length > MAX_REVIEW_LENGTH}
            onClick={commentButtonHandler}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
