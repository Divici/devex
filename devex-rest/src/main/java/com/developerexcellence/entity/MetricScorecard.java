package com.developerexcellence.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

import java.math.BigInteger;
import java.util.Date;

@Data
@Entity
@JsonIgnoreProperties(ignoreUnknown = true)
@Table(name = "METRIC_SCORECARD")
public class MetricScorecard {
    @Id
    @Column
    @JsonProperty("metric_scorecard_id")
    private BigInteger metricScorecardId;
    @Column
    @JsonProperty("dev_id")
    private String devId;
    @Column
    private Date date;
    @Column
    private String segment;
    @Column
    private String lob;
    @Column
    private String organization;
}
