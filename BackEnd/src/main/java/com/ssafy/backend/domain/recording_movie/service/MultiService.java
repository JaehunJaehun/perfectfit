package com.ssafy.backend.domain.recording_movie.service;

import com.ssafy.backend.domain.recording_movie.dto.MultiCreateRequestDto;
import com.ssafy.backend.domain.recording_movie.entity.Multi;
import com.ssafy.backend.domain.recording_movie.repository.MultiRepository;

import java.util.List;

public interface MultiService {

    // MultiCreateRequestDto에 해당하는 값을 받아 영상 저장하기 위한 로직
    void createRecording(MultiCreateRequestDto multiCreateRequestDto);

    List<Multi> getRecordingPlayer2IsNull(Long player1);

    List<Multi> getRecordingMulti(Long player1, Long player2);
}
