package io.jgcarlson.dojooverflow.models;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;

@Entity
@Table(name="answers")
public class Answer {
	
	@Id
	@GeneratedValue
	private Long id;
	private String answer;
	private Date created_at;
	private Date updated_at;
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="question_id")
	private Question question;
	
	public Answer() {}
	
	public Answer(String answer) {
		this.answer = answer;
	}
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getAnswer() {
		return answer;
	}

	public void setAnswer(String answer) {
		this.answer = answer;
	}

	public Date getCreated_at() {
		return created_at;
	}

	public void setCreated_at(Date created_at) {
		this.created_at = created_at;
	}

	public Date getUpdated_at() {
		return updated_at;
	}

	public void setUpdated_at(Date updated_at) {
		this.updated_at = updated_at;
	}

	public Question getQuestion() {
		return question;
	}

	public void setQuestion(Question question) {
		this.question = question;
	}

	@PrePersist
	protected void onCreate(){
		this.updated_at = new Date();
	    this.created_at = new Date();
    }

    @PreUpdate
    protected void onUpdate(){
        this.updated_at = new Date();
    }
	

}
